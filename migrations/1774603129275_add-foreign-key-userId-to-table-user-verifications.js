export const up = (pgm) => {
    pgm.addConstraint(
        "user_verifications",
        "fk_user_verifications.userId",
        "FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE",
    );
};

export const down = (pgm) => {
    pgm.dropConstraint("user_verifications", "fk_user_verifications.userId");
};
