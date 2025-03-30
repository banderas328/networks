import asyncio
import websockets
import json

connected_clients = set()

async def handler(websocket, path):
    # Добавляем нового клиента в общий список
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            # Десериализация полученного JSON-сообщения
            data = json.loads(message)

            # Рассылка сообщения всем остальным клиентам
            await asyncio.gather(*[
                client.send(message)
                for client in connected_clients if client != websocket
            ])
    except websockets.ConnectionClosed:
        pass
    finally:
        # Удаляем клиента при отключении
        connected_clients.remove(websocket)

async def main():
    async with websockets.serve(handler, "0.0.0.0", 8765):
        await asyncio.Future()  # Запускаем бесконечный цикл

if __name__ == "__main__":
    asyncio.run(main())
