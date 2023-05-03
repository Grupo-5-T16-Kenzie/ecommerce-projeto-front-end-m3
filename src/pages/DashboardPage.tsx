import { Header } from "../components/Header/Header"
import { NavBar } from "../components/NavBar/NavBar"
import {ProductsList} from "../components/ProductsList/ProductsList"
import { StyledDashboardPage } from "./StyleDashboard"

export const DashboardPage = () => {

    return(
        <StyledDashboardPage>
            <Header />
            {NavBar()}
            <ProductsList />
        </StyledDashboardPage>
    )
    
}
