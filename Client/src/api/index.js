import axios from "axios";

const URL = "http://localhost:2014"; // Server port

export const fetchAccounts = async () => {
    const query = 'getAll';
    return await axios.get(`${URL}/api/v1/login/${query}`);
};

export const getLastAccountID = async () => {
    const query = `getLastAccountID`;
    return await axios.get(`${URL}/api/v1/login/${query}`);
}

export const getAccountByEmail = async (email) => {
    const query = `getAccountByEmail?email=${email}`;
    return await axios.get(`${URL}/api/v1/login/${query}`);
}

export const addNewAccount = async (acc) => {
    const query = `addNewAccount?accid=${acc.accid}`+
                    `&email=${acc.email}`+
                    `&dname=${acc.dname}`+
                    `&psw=${acc.psw}`+
                    `&rol=${acc.rol}`+
                    `&stts=${acc.stts}`+
                    `&avt=${acc.avt}`+
                    `&sex=${acc.sex}`;
    return await axios.get(`${URL}/api/v1/login/${query}`);
}