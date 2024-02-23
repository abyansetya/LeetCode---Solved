# Write your MySQL query statement below

select a.name
from Employee a
inner join Employee b
on a.id = b.managerId
group by a.name, a.id
having count(b.id) >= 5