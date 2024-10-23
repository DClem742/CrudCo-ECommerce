import { z } from "zod";

export const registrationSchema = z.object({
    username: z.string()
        .email("Please enter a valid email address")
        .min(1, "Email is required")
        .transform(email => email.toLowerCase()),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
});

const Registration = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        const result = await registrationSchema.safeParseAsync(formData);
        if (result.success) {
            console.log('Valid Registration Data:', result.data);
        } else {
            console.log('Validation errors:', result.error);
        }
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Register</h2>
                <label className="block mb-4">
                    Your Email Address
                    <input 
                        name="username" 
                        type="email" 
                        placeholder="youremailhere@address.com"
                        className="w-full mt-1 p-2 bg-gray-700 rounded" 
                    />
                </label>
                <label className="block mb-4">
                    Password
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="yourpasswordhere"
                        className="w-full mt-1 p-2 bg-gray-700 rounded" 
                    />
                </label>
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;