var fortunes = [
    'Conquer your fears or they will conquer you',
    'Rivers need springs',
    'Do not fear what you don\'t know',
    'Whenever possible, keep it simple'
];

exports.getFortune = function() {
    var index = Math.floor(Math.random() * fortunes.length);

    return fortunes[index];
};
