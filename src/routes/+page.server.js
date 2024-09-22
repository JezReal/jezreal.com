import { RESUME_URL } from "$env/static/private";

export async function load({ params }) {
    return {
        url: RESUME_URL
    }
}
