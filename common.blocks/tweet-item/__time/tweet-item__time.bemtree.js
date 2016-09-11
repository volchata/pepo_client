block('tweet-item').elem('time')(
    content()(
        function () {

            function getDiffTime(t) {
                var old_date = new Date(t),
                    curr_date = new Date(),
                    diff_date = curr_date - old_date,
                    diff_time,
                    sec = 1000,
                    min = sec * 60,
                    hour = min * 60,
                    day = hour * 24;

                //выводим время с момента добавления твита
                if (diff_date < sec * 60) {
                    diff_time = Math.floor(diff_date / sec) + ' c. назад'; //время в секундах
                } else if (diff_date >= sec * 60 && diff_date < min * 60) {
                    diff_time = Math.floor(diff_date / min) + ' мин. назад'; //время в минутах
                } else if (diff_date < hour * 24) {
                    diff_time = Math.floor(diff_date / hour) + ' ч. назад'; //время в часах
                } else {
                    diff_time = Math.floor(diff_date / day) + ' д. назад'; //время в днях
                }

                return diff_time;
            }

            var tweet = this.ctx.data.tweet;
            var time = tweet.timestamp;
            return {
                block: 'text',
                content: getDiffTime(time)
            };
        })
);
