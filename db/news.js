const { faker } = require('@faker-js/faker');

function createFakeNews() {
    // const objectURL = URL.createObjectURL(blob);
    return {
        title: faker.lorem.sentence(3),
        imgSrc: faker.image.abstract(150, 100, true),
        description: faker.lorem.paragraph(5),
    }
}

function getLastNews() {
    return faker.helpers.multiple(createFakeNews, { count: 3 })
}

module.exports = { getLastNews };
