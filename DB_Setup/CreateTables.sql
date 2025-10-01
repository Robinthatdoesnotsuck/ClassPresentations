CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    post_text TEXT,
    post_date TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE post_comments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    reply BOOLEAN ,
    parent INT,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES posts(id)
)