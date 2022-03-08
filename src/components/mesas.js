import React from "react";

const Mesas =() =>{

    const mesas = [
        {
            estado:"libre",
            horaInicio:"10:00",
            cuenta: 100,
            n: 1
        },
       {
            estado:"ocupada",
            horaInicio:"10:00",
            cuenta: 100,
            n: 2
        },
        {
            estado:"libre",
            horaInicio:"10:00",
            cuenta: 100,
            n:3
        },

        
    ]
    return (
        <div className="section">
            <h1>Mesas</h1>
            <div className="mesas">
                {mesas.map((mesa) =>{
                    return(
                        <a href={"/mesa/"+mesa.n}><div className="mesa">
                        <h2>Mesa {mesa.estado}</h2>
                        <p>Hora de inicio: {mesa.horaInicio}</p>
                        <p>Cuenta: {mesa.cuenta}</p>
                    </div></a>
                        
                    )
                })
                }
                </div>
        </div>
    )
}
export default Mesas;