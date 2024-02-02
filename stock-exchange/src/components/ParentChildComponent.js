// https://prod.liveshare.vsengsaas.visualstudio.com/join?0C78862E53937401549B426988F464076FF0

export function ChildComponent(props) {
    debugger;
    return (
        <div>
            <h1>This is Child Element {props.designation}</h1>
        </div>
    )
}

export default function ParentComponent(props) {
    debugger;
    return (
        <div>
            <h1>This is Parent Element {props.name}</h1>
            <div style={{marginLeft: "20px"}}>
                <ChildComponent {...props}></ChildComponent>
            </div>
        </div>
    )
}