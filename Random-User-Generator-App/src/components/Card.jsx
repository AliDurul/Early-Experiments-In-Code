import React, { useEffect, useState } from 'react'
import mailSvg from "../assets/mail.svg";
import manSvg from "../assets/man.svg";
import womanSvg from "../assets/woman.svg";
import manAgeSvg from "../assets/growing-up-man.svg";
import womanAgeSvg from "../assets/growing-up-woman.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import padlockSvg from "../assets/padlock.svg";
import axios from "axios";


const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";


const Card = () => {

    const [person, setPerson] = useState(null)
    const [value, setValue] = useState("")
    const [information, setInformation] = useState("")


    const [tableValues, setTableValues] = useState([])

    const fetchData = async () => {
        const request = await axios.get(url)

        setPerson(request.data.results[0])

    }

    useEffect(() => {
        fetchData()


    }, [])

    useEffect(() => {
        setInformation(`${person?.name?.first} ${person?.name?.last}`);
    }, [person])


    const showInf = (e) => {
        let alt = e.target.alt
        switch (alt) {
            case 'name':
                setValue(alt)
                setInformation(`${person.name.first} ${person.name.last}`);
                break;
            case 'mail':
                setValue(alt)

                setInformation(person.email);
                break;
            case 'age':
                setValue(alt)

                setInformation(person.dob.age);
                break;
            case 'city':
                setValue(alt)

                setInformation(person.location.city);
                break;
            case 'phone':
                setValue(alt)

                setInformation(person.phone);
                break;
            case 'password':
                setValue(alt)

                setInformation(person.login.password);
                break;
            default:
                setInformation("");
        }
    }

    const addTable = () => {
        setTableValues([...tableValues, person])
        fetchData()
    }

    const handleDelete = () => {

    }



    return (

        <div className="block">
            <div className="container">
                <img src={person ? person.picture.medium : defaultImage} alt="random user" className="user-img" />
                <p className="user-title">My {value ? value : 'Name'} is</p>
                <p className="user-value">{information}</p>
                <div className="values-list">
                    <button className="icon" data-label="name">
                        <img onClick={showInf} src={womanSvg} alt="name" id="iconImg" />
                    </button>
                    <button className="icon" data-label="email">
                        <img onClick={showInf} src={mailSvg} alt="mail" id="iconImg" />
                    </button>
                    <button className="icon" data-label="age">
                        <img onClick={showInf} src={womanAgeSvg} alt="age" id="iconImg" />
                    </button>
                    <button className="icon" data-label="city">
                        <img onClick={showInf} src={mapSvg} alt="city" id="iconImg" />
                    </button>
                    <button className="icon" data-label="phone">
                        <img onClick={showInf} src={phoneSvg} alt="phone" id="iconImg" />
                    </button>
                    <button className="icon" data-label="password">
                        <img onClick={showInf} src={padlockSvg} alt="password" id="iconImg" />
                    </button>
                </div>
                <div className="btn-group">
                    <button alt='name' onClick={fetchData} className="btn" type="button">
                        new user
                    </button>
                    <button onClick={addTable} className="btn" type="button">
                        add user
                    </button>
                </div>

                {tableValues.length > 0 && <table className="table">
                    <thead>
                        <tr className="head-tr">
                            <th className="th">Full Name</th>
                            <th className="th">Email</th>
                            <th className="th">Phone</th>
                            <th className="th">Age</th>
                            <th className="th">Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableValues.map((item, i) => {
                                const { name: { first, last }, email, phone, dob: { age } } = item
                                return (
                                    <tr className="body-tr">
                                        <td>{first} {last} </td>
                                        <td>{email} </td>
                                        <td> {phone}</td>
                                        <td>{age} </td>
                                        <td onClick={() => handleDelete(i)}>❌</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default Card