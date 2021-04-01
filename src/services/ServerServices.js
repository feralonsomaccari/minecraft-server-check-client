export const fetchServerData = async () => {
    return fetch(process.env.REACT_APP_SERVER_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
    }).then((result) => {
        return result.json();
    }).catch((err) => {
        console.log(err);
    });

}