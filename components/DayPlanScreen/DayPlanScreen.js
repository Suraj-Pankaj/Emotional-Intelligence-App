// import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
// import { Calendar, CalendarList, Agenda  } from 'react-native-calendars'
// import React from 'react'

//  const MainScreen = () => {
//   return (
//     <View>
// <Calendar
//   // // Initially visible month. Default = now
//   // initialDate={'2012-03-01'}
//   // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   // minDate={'2012-05-10'}
//   // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   // maxDate={'2012-05-30'}
//   // // Handler which gets executed on day press. Default = undefined
//   // onDayPress={day => {
//   //   console.log('selected day', day);
//   // }}
//   // // Handler which gets executed on day long press. Default = undefined
//   // onDayLongPress={day => {
//   //   console.log('selected day', day);
//   // }}
//   // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//   // monthFormat={'yyyy MM'}
//   // // Handler which gets executed when visible month changes in calendar. Default = undefined
//   // onMonthChange={month => {
//   //   console.log('month changed', month);
//   // }}
//   // // Hide month navigation arrows. Default = false
//   // hideArrows={true}
//   // // Replace default arrows with custom ones (direction can be 'left' or 'right')
//   // renderArrow={direction => <Arrow />}
//   // // Do not show days of other months in month page. Default = false
//   // hideExtraDays={true}
//   // // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
//   // // day from another month that is visible in calendar page. Default = false
//   // disableMonthChange={true}
//   // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
//   // firstDay={1}
//   // // Hide day names. Default = false
//   // hideDayNames={true}
//   // // Show week numbers to the left. Default = false
//   // showWeekNumbers={true}
//   // // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//   // onPressArrowLeft={subtractMonth => subtractMonth()}
//   // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
//   // onPressArrowRight={addMonth => addMonth()}
//   // // Disable left arrow. Default = false
//   // disableArrowLeft={true}
//   // // Disable right arrow. Default = false
//   // disableArrowRight={true}
//   // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//   // disableAllTouchEventsForDisabledDays={true}
//   // // Replace default month and year title with custom one. the function receive a date as parameter
//   // renderHeader={date => {
//   //   /*Return JSX*/
//   // }}
//   // // Enable the option to swipe between months. Default = false
//   // enableSwipeMonths={true}
// markingType={'custom'}
//   enableSwipeMonths={true}
//   // markedDates={{
//   //   '2022-09-29': {selected: true, marked: true},
//   // }}
  
// />
// </View>

    
//   )
// }
// export default MainScreen;


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const DayPlanScreen = () => {
    const [items, setItems] = React.useState({});

    const loadItems = (day) => {

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                          
                            // name: 'Item for ' + strTime + ' #' + j,
                            // height: Math.max(10, Math.floor(Math.random() * 150)),
                            // day: strTime
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Card>
                    <Card.Content>
                        <View>
                            <TextInput>{item.name}</TextInput>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda style={styles.agen}
            
                items= {items}
                loadItemsForMonth={loadItems}
                selected={'2022-10-01'}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
                renderItem={renderItem}
            />
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        
    },
    agen:{
        color:'black'
    }
});

export default DayPlanScreen;