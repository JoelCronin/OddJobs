import React, { useState } from "react";
import FaStar from "react-icons/fa/FaStar";

const StarRating = ({ rating }) => {
    const [stars, setStars] = useState(rating);
    const [hover, setHover] = useState(0);

    const onStarClick = (nextValue) => {
        setStars(nextValue);
    }

    const onStarHover = (nextValue) => {
        setHover(nextValue);
    }

    const renderStars = (stars) => {
        return [...Array(stars)].map((_, i) => {
            const value = i + 1;
            return (
                <FaStar
                    key={i}
                    className="star"
                    size={25}
                    onClick={() => onStarClick(value)}
                    onMouseEnter={() => onStarHover(value)}
                    onMouseLeave={() => onStarHover(0)}
                />
            );
        });
    }
}

module.exports = StarRating;