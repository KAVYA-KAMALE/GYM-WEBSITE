import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className= 'workout_session'>
      <div className= 'wrapper'>
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>We asked exercise scientist Jeffrey M. Willardson, Ph.D., C.S.C.S., 
          associate professor of Kinesiology and Sports Studies at Eastern Illinois University to design a workout that incorporates these principles.
          Do each exercise for 10 to 15 repetitions, using weights that produce fatigue but not failure, and go from one move to the next without stopping.
          Willardson suggests repeating the circuit one to three times, every other day. 
        </p>
        <img src= "/img5.jpg" alt="workout"/>
      </div>
      <div className= "wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Boot camp workouts include a range of cardio, strength training, and speed exercises all in one session. Below are some of our featured bootcamps.
          </p>
          <div className="bootcamps">
            <div>
              <h4> Jump rope (30 seconds)</h4>
              <p>
              Stand with feet together, holding a jump rope handle in each hand. Swing the jump rope forward, over your head.
              As the jump rope swings toward your feet, jump over it. Continue jumping for 30 seconds.
              </p>
            </div>
            <div>
              <h4> Wall sit (30 seconds)</h4>
              <p>
              Stand against a wall with feet hip-width apart. Pressing your back into the wall, slowly slide down until you’re in a squat position 
              (hips and knees at 90-degree angles). Place your hands on the tops of your thighs or squeeze them together in front of you. 
              Hold this position for 30 seconds. Be sure to squeeze your glutes and engage your core.
              </p>
            </div>
            <div>
              <h4> Jumping jack (30 seconds)</h4>
              <p>
              Stand with arms at your sides and legs together. Jump up and spread your legs out to the sides (around shoulder-width apart) 
              while at the same time lifting your arms out and over your head. Jump back to the starting position while lowering your arms. 
              Continue this for 30 seconds.
              </p>
            </div>
            <div>
              <h4> Mountain climber (30 seconds) </h4>
              <p>
              Start in a traditional straight-arm plank position. Lift your right foot off the floor and bring your right knee toward your chest. 
              Avoid rotating your hips or shoulders. Return to the starting position, then do the same with your left knee. Continue alternating 
              legs for 30 seconds. Be sure to keep your core engaged and maintain a neutral spine.
              </p>
            </div>
          </div>
      </div>
      
    </section>
  )
}

export default WorkoutSessions