import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yanlış Yere Geldin Dostum',
        'Yanlış Yere Geldin Dostum',
        'Yanlış Yere Geldin Dostum'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

