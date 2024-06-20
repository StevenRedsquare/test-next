import React from "react";
import style from "./userCard.module.css";

const UserCardPage = ({ name, email }: { name: string; email: string }) => {
    return (
        <div className={style.card}>
            User Card for {name}: {email}
        </div>
    );
};

export default UserCardPage;
