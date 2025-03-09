import PropTypes from "prop-types"; 
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "../Friend.module.css";

export const FriendList = ({ friends }) => {
    return (
        <>
        <h3>Список друзів</h3>
        <ul className={css.friend__list}>
            {friends.map(({avatar, name, isOnline, id }) => {
                return <FriendListItem
                key={id}
                name={name}
                isOnline={isOnline}
                avatar={avatar}
                />
            })}
        </ul>
        </>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
};