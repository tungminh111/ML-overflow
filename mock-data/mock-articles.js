import faker from "faker/locale/en";

export const getArticles = () => {
    const articles = [];
    const length = 100;
    for (let i = 0; i < length; i++) {
        articles.push({
            id: faker.datatype.uuid(),
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            image: faker.image.image(),
            user: {
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
            },
        });
    }

    return articles;
};
