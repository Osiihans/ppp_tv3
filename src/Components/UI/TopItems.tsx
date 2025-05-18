import {Card} from "./Card.tsx";
import {Link} from "react-router";


export const TopItems = () => {
    return (
        <div className="top-items-container">
            <div className="top-items">
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
                <Link to="single"> <Card/></Link>
            </div>
        </div>
    )
}