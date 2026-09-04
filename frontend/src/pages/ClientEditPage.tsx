import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ClientEditPage() {

    const [formData, setFormData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/clients/${id}`);
                const client = await response.json();
                console.log('🍏 response: ', client);

                setFormData(client);
            } catch (error) {
                console.log(error);
            }
        };

        fetchClient();

    }, [id]);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:5001/api/clients/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const updatedClient = await response.json();


        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <h1>Edit Client</h1>

            {formData && (
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">
                        Save changes
                    </button>

                </form>
            )}
        </div>
    );
}