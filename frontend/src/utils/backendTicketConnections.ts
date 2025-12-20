import { connection } from "./axiosConnection";

interface Ticket{
    formId?: number,
    name: string,
    email: string,
    phone: string,
    description: string
}

async function getTickets(): Promise<Ticket[]>{
    try {
        const res = await connection.get('form');

        if(!res) return([]);

        return res.data as Ticket[]
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function createTicket(ticket: Ticket): Promise<Ticket[]>{
    try {
        const res = await connection.post('form', ticket);
        if (!res) return([]);

        return res.data as Ticket[];
    } catch (error) {
        console.log(error);
        return[]
    }
}

async function addTicketComment(id:number, comment: string) {
    try {
        const res = await connection.patch('form', {id, comment});

        if(!res) return;

        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}

async function deleteTicket(id:number){
    try {
        const res = await connection.delete(`form/${id}`);

        if(!res) return;
        
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}

async function changeTicketStatus(formId:number, status:string){
    try {
        const res = await connection.patch('form/change-status', {formId, status});
        console.log(res);
        
        if(!res) return;

        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}

export {getTickets, createTicket, addTicketComment, deleteTicket, changeTicketStatus}