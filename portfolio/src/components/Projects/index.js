import React from 'react'

const Project = ({ details }) => {

    return (
        <div className="col-sm-3">
            <div class="card" style={{ width: "18rem" }}>
                <a href={details.deployed} target="blank">
                    <img src={details.image} class="card-img-top" alt={details.name} /></a>
                <div class="card-body">
                    <h5 class="card-title">{details.name}</h5>

                    <a
                        href={details.repo}
                        target="blank"
                        style={{fontSize:"2.5rem"}}
                    ><i className="fa fa-github text-body"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Project