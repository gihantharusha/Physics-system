import { get_top_ranks } from "../services/firestore";

const load_places = async () => {
  const res = await get_top_ranks();

    const top_ranks = [];
    const other_ranks = [];

    [...res]
        .sort((a, b) => parseInt(a.data().place, 10) - parseInt(b.data().place, 10))
        .forEach((e) => {
            const rank = {
                place: parseInt(e.data().place),
                name: e.data().name,
            };

            if (parseInt(rank.place, 10) <= 3) {
                top_ranks.push(rank);
            } else {
                other_ranks.push(rank);
            }
        });

    return {
        top: top_ranks,
        other: other_ranks,
    };


};

export default load_places;
