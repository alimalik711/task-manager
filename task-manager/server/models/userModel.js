const pool = require('../config/db')

const getUserByEmail = async(email)=>

{
try{

    const result = await pool.query("SELECT * FROM myuser WHERE email = $1 ",[email])

    return result.rows[0];


}
catch(error){

    throw error;

}


}



const CreateUser = async(name,email,hashedpass)=>

{
try{

    const result = await pool.query("INSERT INTO myuser (name,email,password) VALUES ($1,$2,$3) RETURNING * ",[name , email , hashedpass])

    return result.rows[0];


}
catch(error){

    throw error;

}


}



const getallusers = async()=>

{
try{

    const result = await pool.query("SELECT id, name, email, role, is_blocked, created_at FROM myuser ")

    return result.rows;


}
catch(error){

    throw error;

}


}


const blockuserbyid = async(userid)=>

{
try{

    const result = await pool.query("UPDATE myuser  SET is_blocked= true WHERE id = $1 RETURNING id, name, email, role, is_blocked, created_at ",[userid])

    return result.rows[0];


}
catch(error){

    throw error;

}


}



const unblockuserbyid = async(userid)=>

{
try{

    const result = await pool.query("UPDATE myuser  SET is_blocked= false WHERE id = $1 RETURNING id, name, email, role, is_blocked, created_at ",[userid])

    return result.rows[0];


}
catch(error){

    throw error;

}



}


const deleteUserById = async (userId) => {
    try {

        const result = await pool.query(
            `DELETE FROM myuser
             WHERE id = $1
             RETURNING id, name, email, role, is_blocked, created_at`,
            [userId]
        );

        return result.rows[0];

    } catch (error) {
        throw error;
    }
};


const getuserbyid = async (userid )=>
{

    try{

    const result = await pool.query("SELECT * FROM myuser WHERE id = $1 ",[userid])

    return result.rows[0];

    }
    catch(error)
    {


    }

}






module.exports = {
    getUserByEmail,CreateUser,getallusers,blockuserbyid,unblockuserbyid,deleteUserById
};