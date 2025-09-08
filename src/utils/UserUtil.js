const User = [
    {
        name: "John",
        role: "admin"
    },
    {
        name: "Micel",
        role: "user"
    },
    {
        name: "michel",
        role: "superadmin"
    }
]


export const isUserExist = (userData) => {
    const { name, role } = userData;
    const user = User.find((u) => u.name == name && u.role == role);
    if (user) return true;

    return false;
}