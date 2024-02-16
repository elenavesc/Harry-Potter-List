import noImg from '../../images/noImg.png';
import '../../scss/layout/CardDEtail.scss';
import ProprTypes from 'prop-types';

const names = data.alternateNames.join(',');

function CardDetail ({data}) {

    return (
        <article key={data.id} className={'cardDetail ${data.house}'}>
            <img 
                src={data.img !==''? data.img: noImg} 
                alt={data.name} 
                className='cardDetail_image'/>
            <div className='cardDetail_text'>
                <h3 className='cardDetail_text_name'>{data.name} </h3>
                <p className='cardDetail_text_info'>
                    Especie: <span>{data.specie} </span>
                </p>
                <p className='cardDetail_text_info'>
                    Estado: {data.alive ? ( <span>
                        Vivito y colenado 
                    </span> ):( <span>Muerto</span> )} 
                </p>
                <p className='cardDetail_text_info'>
                    Género: <span>{data.gender} </span>
                </p>
                {data.house !== '' &&(
                    <> 
                        <p className='cardDetail_text_info'>
                            Casa: <span>{data.house} </span> 
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
CardDetail.propTypes = {
    data: ProprTypes.array,
};

export default CardDetail;