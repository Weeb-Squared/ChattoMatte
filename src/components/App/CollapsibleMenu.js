import React from "react";

// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CollapsibleMenu () {
    return (
        <div id="accordion">
            <div className="card">
                <div className="label">
                    <Button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Some weird shit
                    </Button>
                </div>
                <div id="collapseOne" className="collapse card-body" aria-labelledby="headingOne" data-parent="#accordion">
                    {Array(100).fill(1).map((el, i) =>{
                        let id = `selectGuildId${i}`
                        return <div id={ id } key={i} > uwu</div>
                    })}
                </div>
            </div>
            <div className="card">
                <div className="label">
                    <Button className="button collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Another weird shit
                    </Button>
                </div>
                <div id="collapseTwo" className="collapse card-body" aria-labelledby="headingTwo" data-parent="#accordion">
                    {Array(100).fill(1).map((el, i) =>{
                        let id = `selectGuildId${i}`
                        return <div id={ id } key={i} > owo</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default CollapsibleMenu;