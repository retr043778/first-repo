const names = ["John", "Bob", "Mary", "Joe"];

for (let i = 0; i < names.length; i++) {
    console.log(i + ". " + names[i]);
};

for (name of names) {
    console.log(name);
};