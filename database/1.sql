CREATE TABLE user_tokens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    access_token_sha CHAR(64) NOT NULL,
    access_expires DATETIME NOT NULL,
    refresh_token_sha CHAR(64) NOT NULL,
    refresh_expires DATETIME NOT NULL,
    created_at DATETIME NOT NULL,
    revoked_at DATETIME NULL
);
CREATE INDEX idx_user_tokens_access_sha 
    ON user_tokens(access_token_sha);

CREATE INDEX idx_user_tokens_refresh_sha 
    ON user_tokens(refresh_token_sha);

CREATE INDEX idx_user_tokens_access_expires 
    ON user_tokens(access_expires);

CREATE INDEX idx_user_tokens_refresh_expires 
    ON user_tokens(refresh_expires);

CREATE INDEX idx_user_tokens_user 
    ON user_tokens(user_id);