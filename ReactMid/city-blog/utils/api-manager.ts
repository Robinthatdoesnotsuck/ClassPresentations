import axios from "axios"

export interface User {
    id: string
    username: string
    password: string
    email: string
}

interface Post {
    id: string
    user_id: string
    post_text: string
    post_date: string
}

interface Comment {
    id: string
    user_id: string
    post_id: string
    comment_text: string
    reply: boolean
    parent: string
}

export async function getUsers() {
    const { data, status } = await axios.get<User[]>(
      'http://localhost:8081/user',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
}

export async function getUserByID() {
    const { data, status } = await axios.get<User[]>(
      'http://localhost:8081/user',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
}

export async function getPosts() {
    const { data, status } = await axios.get<Post[]>(
      'http://localhost:8081/posts',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
}

export async function getComments() {
    const { data, status } = await axios.get<Comment[]>(
      'http://localhost:8081/comments',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
}