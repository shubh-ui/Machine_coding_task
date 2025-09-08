import { useActionState } from "react";
import { isUserExist } from "../utils/UserUtil";  

const addUser = async (previousState, formData) => {
  const name = formData.get("name");
  const role = formData.get("role");


  const userExists = await isUserExist({ name, role });

  if (userExists) {

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);  
    });

    return { success: false, message: "User already exists" };
  } else {
    return { success: true, message: "User added successfully" };
  }
};

const UserForm = () => {
  const [formState, formAction, isPending] = useActionState(addUser, {});

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Manage Users</h2>
      <form
        action={formAction}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input type="text" name="name" />
        <input type="text" name="role" />
        <button disabled={isPending} type="submit">
          Add
        </button>
      </form>

      {formState && formState.success !== undefined ? (
        <p>{formState.success ? formState.message : formState.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserForm;
