


export default function NotDetay({not}) {
    return (
        <div className="notDetay">
            <h4> {not.baslik} </h4>
            <p> {not.aciklama} </p>
            <p> {not.createdAt} </p>
        </div>
    )
}
