import axios from 'axios';
import filterParams from './filterParams';

export default {
    //get articles from nyt
    getArticles: function(params) {
        return axios.get('/api/nyt', {params:filterParams(params)});
    },

    //save articles to our mongo db
    saveArticle: function(articleData) {
        return axios.post('/api/articles', articleData);
    },
    getSavedArticles: function () {
    return axios.get('/api/articles');
    }
};
