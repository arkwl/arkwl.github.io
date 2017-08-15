export const routes: Routes = [
    {
        path: '',
        component: InfoPaneComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]