import { iCollection } from "../model";

export async function getCollections(url: string): Promise<iCollection[]> {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
}