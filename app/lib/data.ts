import { sql } from '@vercel/postgres';


// Games data

export async function fetchWeapons() {

  

    try {
      const data = await sql`SELECT * FROM weapons`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch games data.');
    }
  }

  export async function fetchCharacters() {

  

    try {
      const data = await sql`SELECT * FROM characters`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch games data.');
    }
  }


