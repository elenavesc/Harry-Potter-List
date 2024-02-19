import noImg from '../../images/noImg.png';
import '../../scss/layout/CardDetails.scss';
import PropTypes from 'prop-types';



function CardDetail ({data}) {
    const names = data.alternateNames.join(',');
    return (
        <article key={data.id} className={'cardDetail ${data.house}'}>
            <section className='card'>
            <img 
                className='cardDetail_image'
                src={data.image !==''? data.image : noImg} 
                alt={data.name} 
                />
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
            </section>
        </article>
    );
}
CardDetail.propTypes = {
    data: PropTypes.object,
};

export default CardDetail;