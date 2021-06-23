import { articles } from "../../../data"

export default function handler({query: { id }}, res) {
    // const id = req.query.id;

    const filtered = articles.filter((article) => article.id === id);

    if(filtered.length > 0){
        return res.status(200).json(filtered[0])
    }

    res.status(404).json({
        status: 404,
        message: `article id with ${id} is not found`
    })
}
