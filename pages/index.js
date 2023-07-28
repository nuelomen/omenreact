import BannerSection from '@/Components/banner/BannerSection'
import classes from './index.module.css'
import BannerImg from '@/Components-learn/Banner/bannerImage'

function home(){
    return(
        <div className={classes.section}>
        <BannerSection/>
        <BannerImg/>
        </div>
    )
}
export default home