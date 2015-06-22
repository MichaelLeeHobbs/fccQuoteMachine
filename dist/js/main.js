var quotes = [
    {quote: "It makes my tongue angry...after eating Ramen his father made for the first time.", author: "Isaac Hobbs"},
    {quote: "Are you jell?", author: "Isaiah Hobbs"},
    {
        quote: "The dinosaurs became extinct because they didn't have a space program. And if we become extinct because we don't have a space program, it'll serve us right!",
        author: "Larry Niven"
    },
    {
        quote: "Every atom in your body came from a star that exploded. And, the atoms in your left hand probably came from a different star than your right hand. It really is the most poetic thing I know about physics: You are all stardust. You couldn’t be here if stars hadn’t exploded, because the elements - the carbon, nitrogen, oxygen, iron, all the things that matter for evolution and for life - weren’t created at the beginning of time. They were created in the nuclear furnaces of stars, and the only way for them to get into your body is if those stars were kind enough to explode. So, forget Jesus. The stars died so that you could be here today.",
        author: "Lawrence M. Krauss"
    },
    {
        quote: "The man without self-reliance and an iron will is the plaything of chance, the puppet of his environment, the slave of circumstances.",
        author: "Charles Robert Darwin"
    },
    {
        quote: "I believe the path to success is paved with bricks of failure and mortar of rejection. To say, I don’t want to fail, is to say, I don’t want to succeed.",
        author: "Mr. Self Development"
    },
    {quote: "A man can only be beaten in two ways, if he gives up or he dies.", author: "Richard Machowicz"},
    {quote: "People are rewarded in public for what they practice for years in private.", author: "Tony Robbins"}
    //{quote: "", author: ""},
    //{quote: "", author: ""},
];

var randomQuote = function () {
    var index = Math.floor(Math.random() * quotes.length);
    $('#quote').text(quotes[index].quote);
    $('#author').text(quotes[index].author);
};
