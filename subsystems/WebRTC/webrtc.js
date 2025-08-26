        let localStream;
        let peers = {};
        let ws = new WebSocket("ws://localhost:8765");
        let userId = Math.random().toString(36).substr(2, 9);
        const peerConfig = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

        ws.onopen = function() {
            ws.send(JSON.stringify({ action: "join", user_id: userId }));
        };

        ws.onmessage = function(event) {
            let message = JSON.parse(event.data);
            let sender = message.user_id;

            if (message.action === "user_joined" && sender !== userId) {
                startCall(sender);
            } else if (message.action === "signal" && sender !== userId) {
                handleSignal(sender, message);
            } else if (message.action === "user_left") {
                removePeer(sender);
            }
        };

        $("#startCall").click(async function() {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            let video = $("<video autoplay playsinline></video>");
            video[0].srcObject = localStream;
            $("#videos").append(video);
        });

        function startCall(targetId) {
            let peer = new RTCPeerConnection(peerConfig);
            localStream.getTracks().forEach(track => peer.addTrack(track, localStream));

            peer.onicecandidate = function(event) {
                if (event.candidate) {
                    ws.send(JSON.stringify({ action: "signal", user_id: userId, target_id: targetId, candidate: event.candidate }));
                }
            };

            peer.ontrack = function(event) {
                let video = $("<video autoplay playsinline></video>");
                video[0].srcObject = event.streams[0];
                $("#videos").append(video);
            };

            peer.createOffer().then(offer => {
                peer.setLocalDescription(offer);
                ws.send(JSON.stringify({ action: "signal", user_id: userId, target_id: targetId, offer: offer }));
            });

            peers[targetId] = peer;
        }

        function handleSignal(sender, message) {
            let peer = peers[sender] || new RTCPeerConnection(peerConfig);
            peers[sender] = peer;

            if (message.offer) {
                peer.setRemoteDescription(new RTCSessionDescription(message.offer));
                peer.createAnswer().then(answer => {
                    peer.setLocalDescription(answer);
                    ws.send(JSON.stringify({ action: "signal", user_id: userId, target_id: sender, answer: answer }));
                });
            } else if (message.answer) {
                peer.setRemoteDescription(new RTCSessionDescription(message.answer));
            } else if (message.candidate) {
                peer.addIceCandidate(new RTCIceCandidate(message.candidate));
            }
        }

        function removePeer(targetId) {
            if (peers[targetId]) {
                peers[targetId].close();
                delete peers[targetId];
            }
        }

        $(window).on("beforeunload", function() {
            ws.send(JSON.stringify({ action: "leave", user_id: userId }));
        });
