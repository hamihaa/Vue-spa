
class Projects{
    static all() {
        return axios.get('/projects')
        //equals to .then(({data}) => this.projects = data);
    }

    static find(id){
        return axios.get('projects/' + id)
    }

}

export default Projects;