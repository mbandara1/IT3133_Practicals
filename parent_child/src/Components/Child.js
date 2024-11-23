export default function Childcom(props){
    return(
        <>
        <h3>Hello react I,m Child</h3>
        {
            props.setfun("My name is Child")
        }
        </>
    );
}