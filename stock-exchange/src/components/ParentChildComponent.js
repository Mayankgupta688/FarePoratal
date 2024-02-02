// https://prod.liveshare.vsengsaas.visualstudio.com/join?0C78862E53937401549B426988F464076FF0

export function ChildComponent() {
    return (
        <div>
            <h1>This is Child Element</h1>
        </div>
    )
}


export default function ParentComponent() {
    return (
        <div>
            <h1>This is Parent Element</h1>
            <div style={{marginLeft: "20px"}}>
                <ChildComponent></ChildComponent>
            </div>
        </div>
    )
}