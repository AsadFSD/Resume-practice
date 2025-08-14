import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = forwardRef((props, ref) => {
    const [info, setInfo] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Address: "",
    });

    useImperativeHandle(ref, () => ({
        getInfo: () => info
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <input
                type="text"
                name="Name"
                value={info.Name}
                onChange={handleChange}
                placeholder="Full Name"
            />
            <input
                type="email"
                name="Email"
                value={info.Email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="Phone"
                value={info.Phone}
                onChange={handleChange}
                placeholder="Phone Number"
            />
            <input
                type="text"
                name="Address"
                value={info.Address}
                onChange={handleChange}
                placeholder="Address"
            />
        </div>
    );
});

export default GeneralInfo;
