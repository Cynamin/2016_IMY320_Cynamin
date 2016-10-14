import { getNews, newsValidateFail, newsSuccess, newsFail, clearNews } from '../modules/createNews'
import { VALIDATE_NEWS, NEWS_SUCCESS, NEWS_FAIL } from '../modules/createNews'
import { fetchNews } from '../modules/news'
import { toggleCreateNews } from '../modules/ui'
import { requestCreateNews } from '../utils/api'
import { toggleFormFlow } from '../utils/formUtils'

export default toggleFormFlow({
	types: [VALIDATE_NEWS, NEWS_SUCCESS, NEWS_FAIL],
	selector: getNews,
	validation: {
		validationFail: newsValidateFail,
		request: requestCreateNews,
		success: newsSuccess,
		fail: newsFail
	},
	toggleForm: toggleCreateNews,
	fetch: fetchNews
})