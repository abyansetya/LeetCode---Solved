# Write your MySQL query statement below

select s.student_id, s.student_name, su.subject_name, count(e.subject_name) as attended_exams
from Students s 
inner join Subjects su
left join Examinations e
on su.subject_name = e.subject_name and e.student_id = s.student_id
group by s.student_id, su.subject_name
order by student_id asc, subject_name asc