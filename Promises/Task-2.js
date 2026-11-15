const users = [
    { id: 1, name: "Ali", age: 21 },
    { id: 2, name: "Leyla", age: 23 },
    { id: 3, name: "Murad", age: 20 }
];

const posts = [
    { id: 1, userId: 1, title: "Learning JavaScript" },
    { id: 2, userId: 1, title: "My First Project" },
    { id: 3, userId: 2, title: "Web Development" },
    { id: 4, userId: 3, title: "Async Programming" },
    { id: 5, userId: 3, title: "Understanding Promises" }
];

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((item) => item.id === userId);

            if (user) {
                resolve(user);
            } else {
                reject("User not found!");
            }
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userPosts = posts.filter((item) => item.userId === userId);
            resolve(userPosts);
        }, 1500);
    });
}

function loadUserWithPromises(userId) {
    console.log("Loading user...\n");

    getUser(userId)
        .then((user) => {
            console.log("User: " + user.name);
            console.log("Age: " + user.age + "\n");
            console.log("Loading posts...\n");
            return getUserPosts(user.id);
        })
        .then((userPosts) => {
            console.log("Posts:");
            for (let i = 0; i < userPosts.length; i++) {
                console.log(i + 1 + ". " + userPosts[i].title);
            }
            console.log("\nData loaded successfully!");
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
}

async function loadUserWithAsyncAwait(userId) {
    try {
        console.log("Loading user...\n");
        const user = await getUser(userId);

        console.log("User: " + user.name);
        console.log("Age: " + user.age + "\n");

        console.log("Loading posts...\n");
        const userPosts = await getUserPosts(user.id);

        console.log("Posts:");
        for (let i = 0; i < userPosts.length; i++) {
            console.log(i + 1 + ". " + userPosts[i].title);
        }

        console.log("\nData loaded successfully!");
    } catch (error) {
        console.log("Error: " + error);
    }
}

loadUserWithPromises(1);
