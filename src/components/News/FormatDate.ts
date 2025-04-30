
const FormatDate = (D: string) => {
 
    const month = new Date(D).toLocaleDateString("en-Us" , {month: "short"});

    const year = D.split("-").at(0);
    const day = D.split("-").at(1)

    return `${day} ${month} ${year} `


}

export default FormatDate
