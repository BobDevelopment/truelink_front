export const prepareLink = (link) => {
    if (!/^https?:\/\//i.test(link)) {
        link = 'https://' + link;
    }
    return link;
};